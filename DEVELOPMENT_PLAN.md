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

1. New ontopanel library.
2. Build converter: convert, validate, make reports and show errors on the drawings.
3. Adjust ontopanel to pass the new library and converter.

### Stage3 Ontopanel-convertor(datamapping) (in progress)

Embed data mapping tool to allow users to do data mapping in Drawio.

### Stage4 Ontopanel-customizedValidator(in progress)

## Suggestions

1. After search, only shows superclasses, underclasses disappers, not good to know which this class contains
2. Mapping tool
   1. how to modify url
   2. more output format
   3. mapping missing values in dataset, as removed nodes.
