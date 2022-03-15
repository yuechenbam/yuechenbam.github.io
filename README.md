## About

This is a fork of [diagrams.net](https://app.diagrams.net), [previously draw.io](https://www.diagrams.net/blog/move-diagrams-net).

There is one plugin ontopanel, which can be found via Extra-Plugins. Click [drawio interface](https://yuechenbam.github.io/src/main/webapp/index.html) to get full editor functionality of the plugin version.

If you see any updates to this project, be sure to clear your cache (history) before opening it, otherwise the new features will not show up. If you see the error in other browsers, please use Chrome to open it.

This is a beta version, please let me know if you have any comments(yue.chen@bam.de).

## Ontopanel

The Ontopanel plugin contains three parts(tools): Ontopanel-Libary, EntityFinder, and Convertor

### Ontopanel-Library

The library is designed for whole Ontopanel plugin. It is based on Chowlk libary, but has some different features.

1. Load automatically in the sidebar.
2. Each shape has hover effect and shape data.
3. All the shape contains a "Type" attribute, Class, ObjectProperty, DatatypeProperty, AnnotationProperty, DataType, DataValue and Individual contain also "IRI" attribute.
4. "Type", "IRI_XX", "Mapping_XX" are preserved words, try not to use them for other purposes in shape data.

### Ontopanel-EntityFinder

EntityFinder is a tool that allows user to upload their ontologies and export in drawio.
EntitiyFinder has a built-in MSEO ontology, but users can upload their own ontologies. Registered users can also save their ontologies in the database.
EntitiyFinder is designed as a simplified version of protege. So it should display all entities in tree structure and all details (annotations, sub-relations, equivalents, domains, ranges...) in a tree structure . If there is any information missing, you can contact me to fix the bug.

#### New features

1. User can select to show all entities in URI or RDFLabel.

2. Together with Ontopanel-Library, entities can be showed in RDFLabel in the plot, IRI is saved in shape data.

#### EntityFinder(old)

The old version, which is suitable for chowlk library. It contains most features.

Please click to see how to use the plugin of EntityFinder:

https://user-images.githubusercontent.com/90606851/153627154-461022aa-f002-4fcd-ab5a-363996754233.mp4

### Ontopanel-Convertor

Convertor that convert current plot to owl ontology.

1. It can check the errors that are made in plot.
2. User can download the file.
3. User can realize data-mapping.
4. If chowlk libary, instead of ontopanel-libary are used, please transform it first.

Please click to see how to use the plugin of Convertor:

https://user-images.githubusercontent.com/90606851/153622067-b3c062b1-92ee-470e-a685-1d3549b85216.mp4

### Version(more in ChangeLog)

**15.03.2022(latest): v2.2**

- Convertor
  - add a search bar and copyall btn in OWL result.
  - download files with right extension.
- EntityManager

  - rename to EntityManager
  - update tips for namespaces in ReadMe and allowed combinations in Ontopanel-Library.

-
