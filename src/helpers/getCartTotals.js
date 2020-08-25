const getCartTotals = (cartItems, discountPolicies) => {
  return cartItems.reduce(
    (totals, product, index) => {
      const subtotal =
        totals.subtotal + product.valor_unitario * product.quantidade;
      const newValue = {
        itemsCount: totals.itemsCount + product.quantidade,
        subtotal,
        total: subtotal,
        discount: 0,
      };

      return index === cartItems.length - 1
        ? { ...newValue, ...getCartDiscount(newValue, discountPolicies) }
        : newValue;
    },
    { itemsCount: 0, subtotal: 0, discount: 0, total: 0 }
  );
};

const RULES = {
  valor_minimo: (totals, value, percent_discount) => ({
    isValid: totals.subtotal > value,
    appliedDiscount: {
      ...totals,
      total: totals.subtotal - totals.subtotal * (percent_discount / 100),
      discount: totals.subtotal * (percent_discount / 100),
    },
  }),
  quantidade_itens_minima: (totals, value, percent_discount) => ({
    isValid: totals.itemsCount > value,
    appliedDiscount: {
      ...totals,
      total: totals.subtotal - totals.subtotal * (percent_discount / 100),
      discount: totals.subtotal * (percent_discount / 100),
    },
  }),
};

const getCartDiscount = (totals, discountPolicies) => {
  for (let { valor, tipo, desconto_percentual } of discountPolicies) {
    const { isValid, appliedDiscount } = RULES[tipo](
      totals,
      valor,
      desconto_percentual
    );
    if (isValid) {
      return appliedDiscount;
    }
  }

  return totals;
};

export default getCartTotals;
