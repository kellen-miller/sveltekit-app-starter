<script lang="ts">
    import Logo from "$lib/icons/Logo.svelte";
</script>

<nav class="nav-container">
    <div class="logo">
        <Logo/>
    </div>
    <ul class="primary-navigation" id="primary-navigation">
        <li class="active">
            <a href="/">
                <span aria-hidden="true">00</span>Home
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">01</span>Destination
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">02</span>Crew
            </a>
        </li>
        <li>
            <a href="/">
                <span aria-hidden="true">03</span>Technology
            </a>
        </li>
    </ul>
</nav>

<style lang="postcss">
    nav ul {
        display: flex;
    }

    .logo {
        margin: 2rem;
    }

    .nav-container {
        align-items: center;
        justify-content: space-between;
    }

    .primary-navigation {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>