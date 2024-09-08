#!/usr/bin/env make -f
# -*- makefile -*-

SHELL = bash -e


image:
	@docker compose -p luisalejandro -f docker-compose.yml build --force-rm --pull

start:
	@docker compose -p luisalejandro -f docker-compose.yml up --remove-orphans -d

dependencies: start
	@docker compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro yarn install

readme: start
	@docker compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro yarn start

console: start
	@docker compose -p luisalejandro -f docker-compose.yml exec \
		--user luisalejandro luisalejandro bash

stop:
	@docker compose -p luisalejandro -f docker-compose.yml stop luisalejandro

down:
	@docker compose -p luisalejandro -f docker-compose.yml down \
		--remove-orphans

destroy:
	@docker compose -p luisalejandro -f docker-compose.yml down \
		--rmi all --remove-orphans -v