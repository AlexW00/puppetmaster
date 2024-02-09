# Puppetmaster

STATE: `IDEATION`

**Puppetmaster** is an k8s framework for building and running GPT-powered agents, called _puppets_.

_Puppets_ are GPT-powered agents that can complete a defined set of tasks using a set of _tools_.
_Tools_ are stateless _functions_ or _programs_ owned by _puppets_ and used to complete tasks.

Furthermore, puppets can interact with other _puppets_ ("friends") and normal containers ("services") by discovering them in the k8s cluster.

The _puppetmaster_ is responsible for managing puppets and friendship/service discovery. By configuring _friendship_ custom resources, you can define which puppets are friends and how they can interact with each other. By configuring _service discovery_ custom resources, you can define how puppets can discover and interact with other containers running in the k8s cluster.

## Components

The _puppetmaster_ consists of the following components:

- [Compiler](compiler/README.md): CLI tool to compile a puppet manifest file into a Dockerfile (`compile`) and build the Dockerfile into a Docker image (`build`).
- [Runtime](runtime/README.md): The core component of the puppetmaster system. It is responsible for managing puppets and friendship/service discovery.
- [Helm](helm/README.md): Helm chart to deploy the puppetmaster system to a k8s cluster.

## Usage

To build your own puppets, you can use the [puppetmaster compiler](compiler/README.md) to build and publish your own puppets.

To deploy the puppetmaster system to a k8s cluster, you can use the [puppetmaster helm chart](helm/README.md) and configure it to your needs (e.g. by using your own puppet images and configuring friendships and service discovery).
