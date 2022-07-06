## What is Ontopanel?

Ontopanel is a plugin in [diagrams.net](https://app.diagrams.net) that helps domain experts to build ontologies and method graph visually.

It is designed within the framework of the [Materials Open Laboratory (MatOLab)](https://github.com/Mat-O-Lab) by [Bundesanstalt für Materialforschung und -prüfung (BAM)](https://www.bam.de/Navigation/DE/Home/home.html) to solve the problems encountered by domain experts when building ontologies graphically using diagrames.net, such as ontology reuse, ontology transformation and data mapping.

## About

This is a demo of diagrams.net with Ontopanel plugin on the GithubPage. Ontopanel can be loaded via Extra-plugins. 

**Please note! The official Diagrams.net website does not contain this plugin, only this version here.**

Visit Ontopanel-diagrams.net version: [diagrams.net with Ontopanel](https://yuechenbam.github.io/src/main/webapp/index.html)

Because this plugin version is hosted in the GithubPage, only the editor feature is available, other features related to Git or Collarbtion are not available.

If you see the error in other browsers, please use Chrome to open it.

This is a beta version, and if you want to host your own application, please find the [source code](#related-repositories-and-links) below.

## Ontopanel

The Ontopanel plugin contains three parts(tools): Libary, EntityManager, and Convertor

### Ontopanel-Library

The library is designed for whole Ontopanel plugin. It is based on Chowlk libary, but has some different features.

1. Load automatically in the sidebar.
2. Each shape has hover effect and shape data.
3. All the shape contains a "Type" attribute, Class, ObjectProperty, DatatypeProperty, AnnotationProperty, DataType, DataValue and Individual contain also "IRI" attribute.
4. "Type", "IRI_XX", "Mapping_XX" are preserved words, try not to use them for other purposes in shape data.

### Ontopanel-EntityManager

EntityManager is a tool that allows user to upload their ontologies and export into the graph in diagrams.net.
EntitiyManager has a built-in MSEO ontology, but users can upload their own ontologies. Registered users can also save their ontologies in the database.
EntitiyManager is designed as a simplified version of Protégé. So it should display all entities and all details (annotations, sub-relations, equivalents, domains, ranges...) in a tree structure. If there is any information missing, you can contact me to fix the bug.

1. Upload ontologies.
2. Display and search entities in IRI or RDFLabel.
3. Export entities to the graph.
4. User authentication and ontology storage in databank.

#### EntityFinder(old)

The old version, which is suitable for chowlk library. It contains most features.

#### Tutorial

Please click to see how to use the plugin of EntityManager:

https://user-images.githubusercontent.com/90606851/153627154-461022aa-f002-4fcd-ab5a-363996754233.mp4

### Ontopanel-Convertor

Convertor that convert current plot to owl ontology.

1. It can check the errors that are made in plot.
2. User can download the file.
3. User can realize data-mapping.
4. If chowlk libary, instead of ontopanel-libary are used, please transform it first.

#### Tutorial

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

## Related repositories and links

[Ontopanel-fontend](https://github.com/yuechenbam/Ontopanel-frontend) - Ontopanel's frontend source code.

[Ontopanel-backend](https://github.com/yuechenbam/Ontopanel-backend) - Ontopanel's backend source code.

## Contact

Yue Chen (yue.chen@bam.de)

Markus Schilling (Markus.Schilling@bam.de)
