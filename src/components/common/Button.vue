<template>
	<button class="button">Button</button>
</template>

<script>
export default {

}
</script>

<style>
:root {
	--button-bg: #58BC82;
	--button-light: #8befb2;
	--button-dark: #208b55;
}

.button--green {
	display: inline-block;
	-webkit-border-radius: 28;
	-moz-border-radius: 28;
	border-radius: 28px;
	border: 1px solid var(--button-dark);
	background: var(--button-bg);
	color: var(--primary-bg);
	text-decoration: none;
	font-size: 1rem;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: var(--button-dark);
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
