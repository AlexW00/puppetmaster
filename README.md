# Puppetmaster

STATE: `IDEATION`

**Puppetmaster** is an k8s framework for building and running GPT-powered agents, called _puppets_.

_Puppets_ are GPT-powered agents that can have a set of abilities, which they can complete using a set of _tools_.
_Tools_ are stateless _functions_ or _programs_ owned by _puppets_ and used during the execution of abilities.

Furthermore, puppets can interact with other _puppets_ ("friends") and normal containers ("services") by discovering them in the k8s cluster.

The _puppetmaster_ is responsible for managing puppets and friendship/service discovery. By configuring _friendship_ custom resources, you can define which puppets are friends and how they can interact with each other. By configuring _service discovery_ custom resources, you can define how puppets can discover and interact with other containers running in the k8s cluster.

## Components

The Puppetmaster framework consists of the following components:

- [Controller](controller/README.md): The core component of the puppetmaster system. It is responsible for managing puppets and friendship/service discovery.
- [Base](base/README.md): Base image for building _puppets_. Can be used as a base image for building your own, customized puppet images.
- [Helm](helm/README.md): Helm chart used to deploy the Puppetmaster framework to a k8s cluster. Using CRDs, you can define puppets, friendships and service discovery.

## Usage

To build & publish your own puppets, use the [base image](base/README.md) as a base image for your own, customized puppet images. The base image is a web server that creates dynamic routes based on the tasks defined in a [puppet manifest](compiler/README.md).
If you find the base image too restrictive, you can use it as a base image for building your own, customized puppet images.

To deploy the Puppetmaster framework to a k8s cluster, you can use the [puppetmaster helm chart](helm/README.md) and configure it to your needs (e.g. by using your own puppet images and configuring friendships and service discovery).
