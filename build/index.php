 <!DOCTYPE html>
<html>
	<head>
		<title>Receipt</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/style.css">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<link rel="apple-touch-icon" href="img/appicon.png?v=1">
		<style>
		@import 'https://fonts.googleapis.com/css?family=Space+Mono';
		</style>
	</head>

	<body class="secondary">
		<div class="wrapper">
			<div class="container main">
				<header>
					<h1>Receipts</h1>
					<nav>
					</nav>
					<button class="ion-ios-compose-outline"></button>
				</header>
				<section class="receipt_list copy"></section>
				<section class="receipt_list">
					<form method="post">
						<label for="search">Search</label>
						<input type="search" name="search" placeholder="Search" results="0">
					</form>
					<ul>
						<li>
							<h2>July, 2016</time></h2>
							<ul>
								<li>
									<div class="image">
										<img src="img/jacket.jpg" alt="Jacket">
									</div>
									<div class="info">
										<h3>Selfridges</h3>
										<time>22 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
								<li>
									<div class="image">
										<img src="img/dress.jpg" alt="Dress">
									</div>
									<div class="info">
										<h3>All Saints</h3>
										<time>12 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
								<li>
									<div class="image">
										<img src="img/sunglasses.jpg" alt="Sunglasses">
									</div>
									<div class="info">
										<h3>John Lewis</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
							</ul>
						</li>
						<li>
							<h2>May, 2016</time></h2>
							<ul>
								<li>
									<div class="image">
										<img src="img/dress.jpg" alt="Dress">
									</div>
									<div class="info">
										<h3>Hugo Boss</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
							</ul>
						</li>
						<li>
							<h2>February, 2016</time></h2>
							<ul>
								<li>
									<div class="image">
										<img src="img/jacket.jpg" alt="Jacket">
									</div>
									<div class="info">
										<h3>H&amp;M</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
								<li>
									<div class="image">
										<img src="img/dress.jpg" alt="Dress">
									</div>
									<div class="info">
										<h3>Zara</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
								<li>
									<div class="image">
										<img src="img/sunglasses.jpg" alt="Sunglasses">
									</div>
									<div class="info">
										<h3>Paul Smith</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
							</ul>
						</li>
						<li>
							<h2>January, 2016</time></h2>
							<ul>
								<li>
									<div class="image">
										<img src="img/jacket.jpg" alt="Jacket">
									</div>
									<div class="info">
										<h3>Wood Wood</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
								<li>
									<div class="image">
										<img src="img/sunglasses.jpg" alt="Sunglasses">
									</div>
									<div class="info">
										<h3>Urban Outfitters</h3>
										<time>11 July 2016</time>
									</div>
									<div class="price">£50.00</div>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</div>
			<div class="container secondary">
				<header>
					<button class="ion-ios-arrow-back"></button>
					<h1>Receipt details</h1>
				</header>
				<section class="receipt_details copy"></section>
				<section class="receipt_details">
					<div class="receipt">
						<label>Your receipt</label>
						<span class="ion-ios-camera camera"></span>
						<input type="file" accept="image/*" >
					</div>
					<div>
						<ul class="meta">
							<li>
								<label for="store">Store</label>
								<input type="text" name="store" class="store" placeholder="Store">
							</li>
							<ul class="nearby_stores">
							</ul>
							<li>
								<label for="date">Date</label>
								<input type="date" name="date" placeholder="Date">
							</li>
						</ul>
						<div class="add_item">
							<button>Add item</button>
						</div>
						<ul class="items">
							
							<li>
								<div class="item">
									<div class="image" style="background-image:url(img/jacket.jpg);">
									</div>
									<div class="info">
										<h3>Bomber jacket</h3>
									</div>
									<div class="price">£50.00</div>
								</div>
								<div class="tools">
									<span class="edit">Edit</span>
									<span class="Delete">Delete</span>
								</div>
							</li>
							<li>
								<div class="item">
									<div class="image" style="background-image:url(img/dress.jpg);">
									</div>
									<div class="info"><h3>Aldo dress</h3></div>
									<div class="price">£50.00</div>
								</div>
								<div class="tools">
									<span class="edit">Edit</span>
									<span class="Delete">Delete</span>
								</div>
							</li>
							<li>
								<div class="item">
									<div class="image" style="background-image:url(img/sunglasses.jpg);">
									</div>
									<div class="info"><h3>Sunglasses</h3></div>
									<div class="price">£50.00</div>
								</div>
								<div class="tools">
									<span class="edit">Edit</span>
									<span class="Delete">Delete</span>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div class="container overlay">
				<header>
					<button class="cancel">Cancel</button>
					<h1>Add an item</h1>
					<button class="save">Save</button>
				</header>
				<div class="item">
					<ul>
						<li>
							<label for="name">Item name</label>
							<input type="text" name="name" class="name" placeholder="Item name">
						</li>
						<li>
							<label for="price">Price</label>
							<input type="number" name="price" placeholder="Price">
						</li>
					</ul>
					<ul>
						<li>
							<div class="photo">
								<label>Your item</label>
								<span class="ion-ios-camera camera"></span>
								<input type="file" accept="image/*">
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<script src="js/jquery-3.0.0.min.js"></script>
		<script src="js/site.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYceEkrVRzKuzBD9dNlFu0ztmZgGcbwjg&libraries=places"></script>
	</body>

</html>