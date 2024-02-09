# Puppetmaster - Base

Base image for building _puppets_. Can be used as a base image for building your own, customized puppet images.

## Details

Basically, the base image is a web server that creates dynamic routes based on the tasks defined in a [puppet manifest](../compiler/README.md). For example, if a puppet manifest defines a task `greet`, the base image will create a route `/greet`.

When a request is made to a task route, a call to a GPT provider (e.g. OpenAI's GPT-A) is made to:

1. Generate a plan for the task
2. Execute the plan
3. Return the result

During these steps, the base image will use the tools defined in the puppet manifest to complete the task. Also, it will interact with other puppets and services in the k8s cluster if any are available and the puppet decides to do so.
