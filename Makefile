.PHONY: all

all:
	docker build . -t kill-sticky
	docker run --rm -t -v ${PWD}:/build/kill-sticky kill-sticky
	docker rmi kill-sticky
