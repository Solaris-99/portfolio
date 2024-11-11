export const technologies = {
    java: { name: "Java", icon: "java/java-original.svg" },
    bash: { name: "Bash", icon: "bash/bash-original.svg" },
    python: { name: "Python", icon: "python/python-original.svg" },
    numpy: { name: "Numpy", icon: "numpy/numpy-original.svg" },
    pandas: { name: "Pandas", icon: "pandas/pandas-original.svg" },
    php: { name: "PHP", icon: "php/php-original.svg" },
    html: { name: "HTML5", icon: "html5/html5-original.svg" },
    css: { name: "CSS3", icon: "css3/css3-original.svg" },
    javascript: { name: "Javascript", icon: "javascript/javascript-original.svg" },
    typescript: { name: "Typescript", icon: "html5/html5-original.svg" },
    node: { name: "NodeJS", icon: "nodejs/nodejs-original.svg" },
    bootstrap: { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
    tailwind: { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
    react: { name: "React", icon: "react/react-original.svg" },
    nextjs: { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
    electron: { name: "Electron", icon: "electron/electron-original.svg" },
    gsuite: { name: "Google Suite", icon: "google/google-original.svg" },
    mysql: { name: "MySQL", icon: "mysql/mysql-original.svg" },
    postgres: { name: "Postgres", icon: "postgresql/postgresql-original.svg" },
    sqlite: { name: "SQLite", icon: "sqlite/sqlite-original.svg" }
};

export type techEntry = keyof typeof technologies;