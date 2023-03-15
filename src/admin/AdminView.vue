<template>
  <div>
    <h1>Admin</h1>
    <div class="admin-grid">
      <div class="box">
        <RouterLink to="/admin-orders">Orders</RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/admin-wish">Custumers Wishlist</RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/admin-cart">Customers Cart</RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/admin-sales">Sales chart</RouterLink>
      </div>
      <div class="box">
        <RouterLink to="/admin-products">Products</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .admin-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  .box {
    background-color: white;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 150px;
    border-radius: 10%;
    margin: 10px;
  }
  a {
    color: black;
    font-weight: 600;
    margin: 20px;
  }
</style>
