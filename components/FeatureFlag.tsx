import React from "react";

interface FeatureFlagProps {
  flag: string;
  children: React.ReactNode;
  beta?: boolean;
}

const FeatureFlag: React.FC<FeatureFlagProps> = ({
  flag,
  children,
  beta = false,
}) => {
  const isEnabled = process.env[`NEXT_PUBLIC_${flag}`] === "true";

  if (isEnabled && !beta) {
    return <>{children}</>;
  } else if (isEnabled && beta && process.env.NODE_ENV !== "production") {
    return <>{children}</>;
  }
  return null;
};

export default FeatureFlag;
