module.exports = {
    plugins: [
      require('postcss-prefix-selector')({
        prefix: '#BolsitasContador',  // Prefijo que deseas agregar a todos los selectores CSS
        transform: (prefix, selector, file) => {
          // Este transform asegura que no se agregue el prefijo si ya está presente
          if (selector.startsWith(prefix)) {
            return selector;
          }
          return prefix + ' ' + selector;  // Prefijo antes de cada selector
        },
      }),
    ],
  };
  