.PHONY: all

all:
	docker build . -t kill-sticky
	docker run --rm -t -v $(shell pwd):/kill-sticky kill-sticky
	docker rmi kill-sticky
