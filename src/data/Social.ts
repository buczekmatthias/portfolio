import { getDiscordIconClass, getEmailIconClass, getGithubIconClass } from "@/utils/useIcons";
import { toast } from "vue-sonner";

export interface Social {
  icon: string;
  text: string;
  value: string;
  backgroundClass?: string;
  action: Function;
}

export function getSocialInfo(): Social[] {
  return [
    {
      icon: getEmailIconClass(),
      text: "E-mail",
      value: "buczekmatthias@gmail.com",
      backgroundClass: "bg-red-600",
      action: (): void => {
        window.open("mailto:buczekmatthias@gmail.com", "_blank");
      },
    },
    {
      icon: getGithubIconClass(),
      text: "Github",
      value: "buczekmatthias",
      action: (): void => {
        window.open("https://github.com/buczekmatthias", "_blank");
      },
    },
    {
      icon: getDiscordIconClass(),
      text: "Discord",
      value: "_.hazy",
      backgroundClass: "bg-indigo-500",
      action: (): void => {
        navigator.clipboard.writeText("_.hazy");
        toast.info("Copied to clipboard", {
          duration: 2500,
          description: "Value copied: _.hazy",
        });
      },
    },
  ];
}
