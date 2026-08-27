import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

interface Banner {
  message: string;
  href: string | null;
}

interface Props {
  locale: string;
  banner: Banner | null;
}

// 공지 배너 + 네비게이션을 하나의 fixed 헤더로 묶어서, 배너 유무에 따라 오프셋을 따로 계산할 필요가 없게 함
export default function SiteHeader({ locale, banner }: Props) {
  return (
    <div id="site-header" className="fixed top-0 left-0 right-0 z-50">
      <AnnouncementBar banner={banner} />
      <Navbar locale={locale} />
    </div>
  );
}
