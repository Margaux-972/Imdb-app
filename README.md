# IMDB Movie Screen - React Native (Expo)

## Description

Ce projet est une reproduction d’un écran de type IMDB développé avec React Native via Expo.
L’objectif est de créer une interface mobile affichant les informations d’un film (affiche, titre, note, description, casting…) tout en respectant un design propre et cohérent sur Android.

## Fonctionnalités

- Affichage des informations d’un film :
  - Affiche
  - Titre
  - Note
  - Description

- Liste des acteurs avec :
  - Photo
  - Nom

- Scroll horizontal pour le casting
- Gestion du texte tronqué avec ...
- Interface responsive compatible iOS & Android

## Technologies utilisées

- React Native
- Expo
- JavaScript (ES6)

## Structure du projet

⚠️ Pour cet exercice, tout le code est volontairement contenu dans un seul fichier : App.js

Ce fichier contient :

- Le layout
- Les styles (CSS-in-JS)
- Les composants nécessaires

Dans un projet réel, on découperait en plusieurs composants.

## Installation

- Cloner le projet :
  git clone https://github.com/Margaux-972/Imdb-app

- Installer les dépendances : yarn add
- Lancer le projet : npx expo start
- Lancer sur un appareil:
  - iOS : ouvrir avec Expo Go ou simulateur
  - Android : ouvrir avec Expo Go ou émulateur

## Tests

L’application a été testée sur : Android

## Améliorations possibles

- Découper en composants (MovieHeader, ActorCard…)
- Ajouter une navigation
- Récupérer les données via une API (ex: TMDB)

---

Projet réalisé dans le cadre d’un exercice React Native.
