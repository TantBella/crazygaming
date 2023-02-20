<script></script>

<template>
  <nav>
    <div>
      <ul>
        <li>
          <RouterLink to="/"
            ><svg
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m20 10.7359622v7.7640378c0 1.3807119-1.1192881 2.5-2.5 2.5h-3c-.2761424 0-.5-.2238576-.5-.5v-6c0-.2761424-.2238576-.5-.5-.5h-3c-.2761424 0-.5.2238576-.5.5v6c0 .2761424-.22385763.5-.5.5h-3c-1.38071187 0-2.5-1.1192881-2.5-2.5v-7.7640378l-.18214637.1500029c-.21316265.1755457-.52827304.1450512-.70381875-.0681115-.17554571-.2131626-.14505115-.528273.06811149-.7038187l8.50000003-7.00000002c.1846279-.15204651.4510793-.15204651.6357072 0l8.5 7.00000002c.2131627.1755457.2436572.4906561.0681115.7038187-.1755457.2131627-.4906561.2436572-.7038187.0681115zm-.9933004-.81801207-7.0066996-5.7702232-7.0066996 5.7702232c.00440713.02669598.0066996.05410521.0066996.08204987v8.5c0 .8284271.67157288 1.5 1.5 1.5h2.5v-5.5c0-.8284271.67157288-1.5 1.5-1.5h3c.8284271 0 1.5.6715729 1.5 1.5v5.5h2.5c.8284271 0 1.5-.6715729 1.5-1.5v-8.5c0-.02794466.0022925-.05535389.0066996-.08204987z"
              />
            </svg>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/categories"
            ><svg
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m14 25h14v2h-14z" />
              <path d="m7.17 26-2.58 2.58 1.41 1.42 4-4-4-4-1.42 1.41z" />
              <path d="m14 15h14v2h-14z" />
              <path d="m7.17 16-2.58 2.58 1.41 1.42 4-4-4-4-1.42 1.41z" />
              <path d="m14 5h14v2h-14z" />
              <path d="m7.17 6-2.58 2.58 1.41 1.42 4-4-4-4-1.42 1.41z" />
              <path d="m0 0h32v32h-32z" fill="none" /></svg
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/shoppingcart"
            ><svg
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h32v32h-32z" fill="none" />
              <path
                d="m12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1 -.996.917h-14.16a1 1 0 0 1 -.996-.917l-.758-9.083h-1.166v-2h4v-1a6 6 0 0 1 6-6zm6.826 9h-13.653l.667 8h12.319zm-5.826 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4zm-5-9a4 4 0 0 0 -3.995 3.8l-.005.2v1h8v-1a4 4 0 0 0 -3.8-3.995z"
              /></svg
          ></RouterLink>
        </li>
        <li>
          <RouterLink to="/user"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"
              /></svg
          ></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
    background-color: rgb(237, 214, 251);
    justify-content: space-around;
    list-style-type: none;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0;
  }
  li {
    padding: 10px;
  }
  svg {
    color: black;
  }
</style>
