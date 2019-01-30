# Read Me

Project built with C++ and OpenFrameworks 0.10.1. Shaders written in GLSL 3.
see https://openframeworks.cc/download/ for OpenFrameworks distributions

## to run:
A prebuilt executable exists under bin/BB_RayTrace.exe single click to run

## source code:
open with MS Visual Studio 2017 and follow setup guide from link above for ofx distribution.
primary source code exists in two places:
- shaders : bin\data\shadersGL3
- Main app : src\ofApp.cpp

## Current Features:
* ray traced sphere with slider adjustable parameters
    * **angle** : angle of the camera rotation form origin
    * **dist** : distance from the sphere to the near place of the camera
    * **height** : distance fromt the near plane to the camera
    * **radius** : radius of the sphere (located at the origin)
    * **step size** : the amount the ray moves forward by each step
    * **steps** : the total steps the ray will take before exiting
* coloring based on height in the y axis
* lighting based on the dot product between the normal and the light direction vector [1, 1, 1]
 