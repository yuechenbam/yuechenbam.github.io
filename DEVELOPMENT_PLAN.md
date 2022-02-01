## Goal

The goal of this project is to develop plugins to make drawio a graphical tool suitable for ontology development. Plugins are designed based on real needs in real cases.

## Stages

### Stage1 Ontopanel (Finished)

A simplified version of the protege in Drawio.

#### Features

1. Upload ontology, display entity details, search for entities, export entities to Drawio drawing.
2. Authentication system: users can register and store ontologies in the database.

### Stage2 Ontopanel-convertor (Finished)

Advanced version of the embedded chowlk converter allowing users to convert drawings in ontologies directly into Drawio.

#### Problems to be solved

1. If the user is not very familiar with the library, they cant understand the meaning of shapes.
2. Impossible to display rdflabel instead of URI. Many ontologies use numeric URIs which are difficult to read.
3. Lack of detailed validation. Chowlk provides very simple validation. More detailed validation like the rules in OWL would be useful.

#### Development plan.

1. Modify the library.
2. Build converter: convert, validate, make reports and show errors on the drawings.
3. Adjust ontopanel to pass the new library and converter.

### Stage3 Ontopanel-convertor(datamapping) (in progress)

Embed data mapping tool to allow users to do data mapping in Drawio.

### Stage4 Ontopanel-customizedValidator(in progress)

## Suggestions(to change)

1. Cant copy and pasta of entity text and details(the right click is disabled)
2. After search, only shows superclasses, underclasses disappers, not good to know which this class contains
