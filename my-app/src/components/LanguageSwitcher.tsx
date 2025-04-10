import { Button, HStack } from "@chakra-ui/react";
import i18n from "i18next";

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // 👈 flip direction
  };

  return (
    <HStack spacing={4}>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
      <Button onClick={() => changeLanguage("ar")}>عربي</Button>
    </HStack>
  );
};

export default LanguageSwitcher;
