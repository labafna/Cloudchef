import { useVisibilityToggle } from "../hooks/useVisibilityToggle";
import type { ReactElement } from "react";

const MobileVideoWithModal = ({
  videoUrl,
  className,
}: {
  videoUrl: string;
  className?: string;
}): ReactElement => {
  const {
    isVisible: isOverlayVisible,
    show: showOverlay,
    hide: hideOverlay,
  } = useVisibilityToggle(false);

  return (
    <>
      <button
        id="preview-button"
        aria-label="video preview button"
        className={`text-p2-d font-inter font-semibold px-6 py-3 ${className}`}
        onClick={showOverlay}
      >
        Watch Video
      </button>
      {isOverlayVisible ? (
        <div
          id="preview-overlay"
          className="flex fixed inset-0 w-full h-full justify-center items-center bg-deepBlack bg-opacity-75 z-20"
        >
          <button
            id="close-overlay"
            className="absolute top-4 right-6 hover:rounded-full hover:bg-deepBlack px-2"
            onClick={hideOverlay}
          >
            <span className="text-p2-m font-grotesk text-deepWhite ">X</span>
          </button>
          <iframe
            id="youtube-video-iframe"
            className="h-4/6 w-4/6 rounded-xl"
            src={`${videoUrl}&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
    </>
  );
};

export { MobileVideoWithModal };
