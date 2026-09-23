const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const output = ts.transpileModule(fs.readFileSync('lib/bannerSchedule.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const helpers = {};
new Function('exports', output)(helpers);

test('Korean admin deadline round-trips independently of machine timezone', () => {
  const date = helpers.parseBannerEnd('2026-09-26T00:30');
  assert.equal(date.toISOString(), '2026-09-25T15:30:00.000Z');
  assert.equal(helpers.toKstInput(date.toISOString()), '2026-09-26T00:30');
});
test('empty deadline clears scheduling, invalid dates are rejected', () => {
  for (const value of ['', null, undefined]) assert.equal(helpers.parseBannerEnd(value), null);
  for (const value of ['2026-02-30T12:00', '2026-09-26T24:00', 'invalid', 4, {}]) {
    assert.equal(helpers.parseBannerEnd(value), undefined);
  }
});
