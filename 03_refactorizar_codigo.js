// Código en JavaScript (Node.js)
async function procesar(items, u) {
  let t = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.stk > 0) {
      t += item.prc * item.q;
      // Actualizamos la base de datos directamente
      await db.query(
        `UPDATE productos SET stk = stk - ${item.q} WHERE id = ${item.id}`,
      );
    }
  }

  if (t > 1000) {
    t = t * 0.9; // Descuento del 10%
  }

  // Enviamos email
  await mailer.send(u.email, "Compraste algo", "Total: " + t);

  console.log("Venta terminada para " + u.name);
  return t;
}

/// CODIGO REFACTORIZADO ///

const discountThreshold = 1000;

function calculateDiscountedTotal(total) {
  if (total > discountThreshold) {
    return total * 0.9; // Descuento del 10%
  }
}

async function sendEmail(to, subject, body) {
  await mailer.send(to, subject, body);
}

async function updateProductStock(item) {
// La DB se encarga de limpiar los datos antes de ejecutarlos
await db.query("UPDATE productos SET stock = stock - ? WHERE id = ?", [item.quantity, item.id]);
}

async function procesar(items, user) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.stock > 0) {
      total += item.price * item.quantity;

      // Actualizamos la base de datos directamente
      await updateProductStock(item);
    }
  }

  // Aplicar descuento si es necesario
  total = calculateDiscountedTotal(total) || total;

  // Enviamos email
  await sendEmail(user.email, "Compraste algo", "Total: " + total);

  console.log("Venta terminada para " + user.name);
  return total;
}
