  const a = { a1: 5, a2: 10, a3: { aa1: 10 } }
  const b = { ...a } // shallow copy
  b.a1 = 10;
  b.a3.aa1 = 100;

  const a = { a1: 5, a2: 10, a3: { aa1: 10 } }
  const b = { ...a, a3: { ...a.a3 } }
  b.a1 = 10;
  b.a3.aa1 = 100;
