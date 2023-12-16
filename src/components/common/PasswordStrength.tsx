import zxcvbn from "zxcvbn";

interface PasswordStrengthProps {
  valueOfPassword?: string;
}
const PasswordStrength = ({ valueOfPassword }: PasswordStrengthProps) => {
  const testResult = valueOfPassword ? zxcvbn(valueOfPassword) : null;
  const num =
    testResult?.score !== undefined ? (testResult.score * 100) / 4 : null;

  //background color change function
  const funcProggressColor = () => {
    switch (testResult?.score) {
      case 0:
        return "#F3F3F3";
      case 1:
        return "#ff0000";
      case 2:
        return "#daa911";
      case 3:
        return "#8fce00";
      case 4:
        return "#008000";
      default:
        return "none";
    }
  };

  //indicator color set
  const ProgressbarColor = () => ({
    width: `${num}%`,
    background: funcProggressColor(),
    height: "4px",
    borderRadius: "8px",
  });

  return (
    <div className="flex justify-start mt-[19px] items-center max-w-[320px] gap-3">
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
        <div style={ProgressbarColor()}></div>
      </div>
    </div>
  );
};

export default PasswordStrength;
