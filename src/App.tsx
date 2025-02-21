import { Select } from "antd";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const languages = [
    { value: "en", label: "English" },
    { value: "br", label: "Português - BR" },
    { value: "es", label: "Español" },
  ];

  const onSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Select
        defaultValue="en"
        options={languages}
        style={{ width: 200, textAlign: "left" }}
        onChange={onSelectLanguage}
      />
      <div>
        <h1>{t("example_title")}</h1>
        <h2>{t("message")}</h2>
      </div>
    </>
  );
}

export default App;
