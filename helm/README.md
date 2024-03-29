# Puppetmaster - Helm

All CRDs can be found [here](./crds).

## Custom Resource Definitions#

The Puppetmaster Helm chart defines the following custom resource definitions:

### [Puppet](./crds/puppet.yaml)

A puppet is a GPT-powered agent, that can complete tasks defined in its abilities using a set of [tools](#tools).

```yaml
apiVersion: puppetmaster.org/v1
kind: Puppet
metadata:
  name: hello-puppet
spec:
  name: hello-puppet
  type: puppet
  version: 1.0.0
  description: Says hello to a person
  image: base-puppet
  abilities:
    - name: greet
      description: Greets a person
      instructions: "Say hello to the person."
      parameters:
        name:
          type: string
          description: The name of the person to greet
          optional: false
      returns:
        greeting:
          type: string
          description: The greeting
          template: "Hello, $name!"
          optional: false
```

```yaml
apiVersion: puppetmaster.org/v1
kind: Puppet
metadata:
  name: summarizer-puppet
spec:
  name: summarizer-puppet
  type: puppet
  version: 1.0.0
  description: Summarizes a text
  image: base-puppet
  abilities:
    - name: summarize
      description: Summarizes a text
      instructions: |
        1. Count the number of words in the text
        2. If the number of words is less than 10, return the text as the summary
        3. If the number of words is more than 10, summarize the text using the summarization tool
        4. Ask your hello-puppet friend to greet the user (if you can't reach your friend, just skip this step)
        5. Return the summary
      parameters:
        textToSummarize:
          type: string
          description: The text to summarize
          optional: false
      functions:
        - name: count-words
          version: 1.0.0
          options:
            do-add-decimal-point: true
      returns:
        summary:
          type: string
          description: The summary of the text
          template: |
            <greeting>
            The text has <word-count> words.
            The summary of the text is: <summarized-text>
          optional: false
```

### Tools

Tools are stateless commands that accept input and return output, and can be used by puppets to complete tasks.

#### Function

A function only accepts input parameters and returns a result.

```yaml
apiVersion: puppetmaster.org/v1
kind: Function
metadata:
  name: count-words
spec:
  name: count-words
  type: function
  version: 1.0.0
  description: Count the number of words in a text
  image: busybox
  options:
    do-add-decimal-point:
      type: boolean
      description: Add a decimal point to the result
      default: false
  parameters:
    text:
      type: string
      description: The text to count words in
      optional: false
  returns: "The number of words in the text"
  cmd: "wc -w $text"
```
