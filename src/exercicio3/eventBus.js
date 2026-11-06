const ouvintes = new Map();

export const EVENTOS = {
  NOTIFICACAO: "notificacao",
};

export function subscribe(evento, callback) {
  if (typeof callback !== "function") {
    throw new TypeError("subscribe: o callback precisa ser uma função");
  }

  if (!ouvintes.has(evento)) {
    ouvintes.set(evento, new Set());
  }
  ouvintes.get(evento).add(callback);

  return function unsubscribe() {
    const grupo = ouvintes.get(evento);
    if (!grupo) return;

    grupo.delete(callback);
    if (grupo.size === 0) {
      ouvintes.delete(evento);
    }
  };
}

export function emit(evento, dados) {
  const grupo = ouvintes.get(evento);
  if (!grupo) return;

  [...grupo].forEach((callback) => callback(dados));
}
