import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Sidebar from "~/components/Sidebar";
import type { User } from "@supabase/supabase-js";
import type { Profile } from "@prisma/client";
import type { PropsWithChildren } from "react";
import { getSampleTags } from "~/services/tags";

interface DefaultLayoutType {
  user?: User | null | undefined;
  profile?: Profile | null | undefined;
  className?: string | null;
}

const DefaultLayout = (props: PropsWithChildren<DefaultLayoutType>) => {
  const { user, profile } = props;

  return (
    <div className="relative">
      <Header user={user} profile={profile} />
      <div className="flex flex-col p-3 lg:flex-row relative">
        <div className="w-full lg:w-3/4 xl:max-w-3xl xl:m-auto mb-8 mt-8 lg:mb-16 lg:mt-16 xl:mt-16 xl:mb-16 px-3">
          {props.children}
        </div>
        <div className="w-full lg:w-1/4 xl:hidden">
          <Sidebar user={user} username={profile?.username} tags={getSampleTags()} />
        </div>
      </div>

      {/* FIXED DESKTOP SIDEBAR */}
      <div className="hidden xl:block absolute top-20 right-0 w-72 min-h-full mb-20">
        <Sidebar user={user} username={profile?.username} tags={getSampleTags()} />
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
