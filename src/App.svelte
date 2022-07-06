<!-- JS -->
<script>
	let greeting = 'hi.';
</script>



<!-- CSS -->
<style>
	@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
	*{
		box-sizing: border-box;
		background: #000;
		background-color: #000;
		color: #fff;
		font-family: "IBM Plex Mono", monospace;
		
		margin: 0;
		padding: 0;
		
	}

	.about{
		font-size: 1.1rem;
		line-height: var(--mono-line-height);
		margin: 0 auto;
		max-width: 1280px;
		padding: 3em 1rem 3em;
	}

	.hello{
		transition: all .65s cubic-bezier(0.23, 1, 0.320, 1);
		font-size: 2em;
		font-weight: 400;
		line-height: 1.15em;
		margin-top: 0;
		margin-bottom: 0;
	}

	.row{
		box-sizing: border-box;
		display: flex;
		flex: 0 1 auto;
		flex-direction: row;
		flex-wrap: wrap;
		margin-left: (calc((1rem*0.5)*-1),-.5rem);
		margin-right: (calc((1rem*0.5)*-1),-.5rem);
	}

	.introText{
		transition: all .65s cubic-bezier(.23,1,.32,1);
		margin: 1.65rem 0 1.65rem 0;
	}
	@media (min-width: 48em){
		.hello{
			font-size: 3.3em;
		}
	}@media (min-width: 75em){
		.footer, section{
			margin-left: auto;
		}
		section{
			font-size: min(1.2vw,24px);
			margin-right: auto;
			max-width: 1140px;
			padding-left: 0;
			padding-right: 0;
			width: 58.5%;
		}
	}
</style>

<!-- HTML -->
	<section class="about">
		<h1 class="hello">
			<span class="greet">{greeting}</span>
			<br>
			<span class="im">i'm</span>
			<br>
			<span class="name">max.</span>
		</h1>
		<div class="row">
				<p class="introText">I'm a designer, artist and programmer
					living and studying in Canada, Winnipeg.
					My passion is to create emotional experience at
					the intersection of art, design and code.
				</p>			
		</div>
	</section>
	




