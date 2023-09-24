
import type { MouseEvent, ReactElement } from "react";
import data from "../config/modes.json";

const ModeToggle = ({ selectedMode, onModeChange }: {selectedMode: string; onModeChange?: (e: MouseEvent<HTMLButtonElement>) => void}): ReactElement => (<div className="p-1 mx-auto rounded-3xl flex w-fit bg-moisture">
  {
    data.availableMode.map(({ id, label }: { id: string; label: string }) => (
      <button
        className={`text-deepBlack text-p0-m md:text-p1-d font-inter py-2 px-4 rounded-20 ${
          id === selectedMode ? "font-semibold bg-greyYellowGreen " : ""
        }`}
        onClick={onModeChange}
        data-id={id}
      >
        <a href={id}>
          For <span className={id === selectedMode ? "italic" : ""}>{label}</span>
        </a>
      </button>
    ))
  }
</div>
)

export default ModeToggle;