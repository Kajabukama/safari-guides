import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const RadioSelect = ({
  field,
  value,
  label,
  description,
}: {
  field: {
    value: string;
    onChange: (value: string) => void;
  };
  value: string;
  label: string;
  description: string;
}) => {
  return (
    <div
      className={`flex items-start space-x-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors ${
        field.value === value ? "border-primary border-2 bg-primary/10" : "border-border"
      }`}
    >
      <RadioGroupItem value={value} id={value} className="mt-1" />
      <Label htmlFor={value} className="flex-1 cursor-pointer">
        <div className="flex flex-col space-y-1">
          <div className="font-medium text-xl">{label}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </Label>
    </div>
  );
};
