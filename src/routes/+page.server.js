let counter = 0

export function load() {
  return { count: counter }
}

export const actions = {
  increment: () => { counter++; return { count: counter } },
  decrement: () => { counter--; return { count: counter } },
}
