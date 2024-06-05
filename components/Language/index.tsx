import { useState, ChangeEvent } from "react";

interface LanguageSelectorProps {
  // Define any necessary props
}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en"); // Default language

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    // You can perform language change logic here (e.g., using an i18n library)
  };

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="bg-white border rounded-lg px-4 py-2 pr-8 text-sm appearance-none focus:outline-none focus:ring focus:border-primary"
      >
        <option value="en">English</option>
        <option value="fr">Bangla</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 12.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 14.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
