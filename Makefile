install:
	npm install

lint:
	npx stylelint ./src/**/*.scss

start:
	npm start

deploy:
	npm run build
