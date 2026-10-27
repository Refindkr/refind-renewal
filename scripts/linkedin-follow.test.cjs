const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');

function loadTs(relativePath) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const mod = { exports: {} };
  const resolve = (name) => name === '@/lib/socialLinks' ? loadTs('lib/socialLinks.ts') : require(name);
  new Function('require', 'module', 'exports', source)(resolve, mod, mod.exports);
  return mod.exports;
}

const { hasLinkedInFollowLink } = loadTs('lib/linkedinFollow.ts');
const url = 'https://www.linkedin.com/company/71602571/';

test('recognizes the existing editor footer and nested link text', () => {
  assert.equal(hasLinkedInFollowLink(`<hr><p>소식을 받아보세요.<br>👉 <a target="_blank" href="${url}"><strong>리파인드 LinkedIn 팔로우</strong></a></p>`), true);
});
test('handles hostname casing, query parameters and trailing slash variants', () => {
  assert.equal(hasLinkedInFollowLink('<a href="https://WWW.LinkedIn.com/company/71602571?trk=site&amp;source=news">Follow REFIND</a>'), true);
});
test('adds the footer when there is no follow link', () => {
  assert.equal(hasLinkedInFollowLink('<p>로봇 기술을 소개합니다.</p>'), false);
  assert.equal(hasLinkedInFollowLink(`<p>${url} 팔로우</p>`), false);
});
test('does not mistake citations or another company for our follow CTA', () => {
  assert.equal(hasLinkedInFollowLink(`<a href="${url}">기사 출처</a>`), false);
  assert.equal(hasLinkedInFollowLink('<a href="https://www.linkedin.com/company/123/">LinkedIn 팔로우</a>'), false);
});
test('rejects invalid, non-web or lookalike destinations', () => {
  for (const href of ['javascript:alert(1)', 'not-a-url', 'https://www.linkedin.com.evil.test/company/71602571/', 'ftp://www.linkedin.com/company/71602571/']) {
    assert.equal(hasLinkedInFollowLink(`<a href="${href}">LinkedIn 팔로우</a>`), false);
  }
});
