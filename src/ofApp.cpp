#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	shader.load("shadersGL3/shader");
	gui.setup();
	gui.add(xAngle.setup("xAngle"   , 0,   0, PI*2));
	gui.add(yAngle.setup("yAngle"   , 0,   0, PI*2));
	gui.add(dist.setup("dist"    , 100, 0, 300));
	gui.add(height.setup("height"  , 400, 0, 1000));
	gui.add(radius.setup("radius"  , 100, 0, 500));
	gui.add(stepSize.setup("stepSize", 1  , 0, 10));
	gui.add(steps.setup("steps"   , 100, 0, 300));
}

//--------------------------------------------------------------
void ofApp::update(){
  shader.setUniform2f("angle"   , xAngle, yAngle);
  shader.setUniform2f("res"     , ofGetWidth(), ofGetHeight());
  shader.setUniform1f("dist"    , dist);
  shader.setUniform1f("height"  , height);
  shader.setUniform1f("radius"  , radius);
  shader.setUniform1f("stepsize", stepSize);
  shader.setUniform1f("steps"   , steps);
}

//--------------------------------------------------------------
void ofApp::draw(){
	ofSetColor(255);
	shader.begin();
	update();
	ofDrawRectangle(0, 0, ofGetWidth(), ofGetHeight());
	shader.end();
	gui.draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
