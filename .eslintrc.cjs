/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:tailwindcss/recommended",
    "plugin:eslint-comments/recommended",
  ],
  settings: {
    tailwindcss: {
      callees: ["cn", "tv"],
      whitelist: [
        "(accent)-(primary|secondary|tertiary|quaternary|quinary)",
        "(bg)(|-button)-(primary|secondary|tertiary)(|-active|-disabled|-hover)",
        "(border)-(primary|secondary)",
        "(text)(|-accent|-button)-(primary|secondary|tertiary|quaternary|quinary)(|-active|-disabled|-hover)",
        "(text)(|-small)",
        "ring-system-focus",
        "(to-bg-)(primary|secondary)",
      ],
    },
  },
};
