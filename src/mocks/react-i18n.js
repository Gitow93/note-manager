const reactI18next = require("react-i18next");

reactI18next.useTranslation = () => ({
  t: (key) => key,
  i18n: {
    changeLanguage: jest.fn(),
    language: "en",
  },
});

module.exports = reactI18next;
