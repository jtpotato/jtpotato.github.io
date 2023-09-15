import { ReactNode } from "react";

type MajorSegmentProps = {
  image: ReactNode;
  imageFirst: boolean;
};

function MajorSegment(props: React.PropsWithChildren<MajorSegmentProps>) {
  return (
    <>
      <div className="p-8 rounded-3xl flex flex-row bg-white/5 min-h-[32em] overflow-hidden relative">
        {props.imageFirst ? props.image : <> </>}
        <div className="flex items-center justify-center w-full">
          {props.children}
        </div>
        {!props.imageFirst ? props.image : <> </>}
      </div>
    </>
  );
}

export default MajorSegment;
