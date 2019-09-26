<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-xl-12 col-lg-12 col-md-12">
				<div class="card o-hidden border-0 shadow-lg my-5">
					<div class="card-body p-0">
						<slot/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'auth-layout',
	}
</script>
