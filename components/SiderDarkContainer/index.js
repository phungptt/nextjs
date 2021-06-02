import React, { useRef } from 'react';
import { Waypoint } from 'react-waypoint';

export default function DarkContainer({
  children,
  sensorRef,
  forceBelowSectionDarkMode,
  outWithnoremoveDarkMode,
  onCallback,
  ...props
}) {
  const ref = useRef();

  return (
    <Waypoint
      onEnter={(e) => {
        if (onCallback) return onCallback();

        if (sensorRef && sensorRef.current) {
          if (forceBelowSectionDarkMode) {
            sensorRef.current.forceDarkMode();

            return sensorRef.current.setElement(ref.current);
          }

          if (!sensorRef.current.getForeceDarkModeValue()) {
            return sensorRef.current.setElement(ref.current);
          }
        }
      }}
      onLeave={(e) => {
        !outWithnoremoveDarkMode &&
          sensorRef &&
          sensorRef.current &&
          sensorRef.current.unforceDarkMode();
      }}
      {...props}
    >
      <div ref={ref}>{children}</div>
    </Waypoint>
  );
}
