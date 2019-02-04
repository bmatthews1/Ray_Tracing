#version 150

out vec4 outColor;

uniform vec2  angle;
uniform vec2  res;
uniform float dist;
uniform float height;
uniform float radius;
uniform float stepsize;
uniform float steps;


struct Incident{
  vec3 pos;
  vec3 ray;
  vec3 normal;
};

struct QuadraticSolution{
  int solutions;
  vec3 s1;
  vec3 s2;
};

QuadraticSolution quadraticSolve(vec3 a, vec3 b, vec3 c){
  float delta = (b*b - 4.*a*c);

  if (delta > 0.){
    return QuadraticSolution(2, (-b + sqrt(delta))/2.*a, (-b - sqrt(delta))/2.*a);
  }
  else if (delta == 0.){
    return QuadraticSolution(1, -b/(2*a), vec3(0));
  }
  else return QuadraticSolution(0, vec3(0), vec3(0));
}


//http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/
mat4 rotationMatrix(vec3 axis, float angle)
{
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;
  
  return mat4(oc*axis.x*axis.x+c,        oc*axis.x*axis.y-axis.z*s, oc*axis.z*axis.x+axis.y*s, 0.0,
              oc*axis.x*axis.y+axis.z*s, oc*axis.y*axis.y+c,        oc*axis.y*axis.z-axis.x*s, 0.0,
              oc*axis.z*axis.x-axis.y*s, oc*axis.y*axis.z+axis.x*s, oc*axis.z*axis.z+c,        0.0,
              0.0, 0.0, 0.0, 1.0);
}


vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 hsv    (float h, float s, float v){return hsv2rgb(vec3(h, s, v));}

void main()
{
  vec2 pixel  = gl_FragCoord.xy;

  vec3 light = vec3(1.);

  mat4 rotX   = rotationMatrix(vec3(0, 1, 0), angle.x);
  mat4 rotY   = rotationMatrix(vec3(1, 0, 0), angle.y);
  vec3 pos    = (rotX*rotY*vec4(pixel - res/2., dist, 0.)).xyz;
  vec3 camera = (rotX*rotY*vec4(0, 0, height+dist, 0.)).xyz;

  vec3 ray    = normalize(pos-camera);

  vec3 col    = vec3(0);

  //https://www.scratchapixel.com/lessons/3d-basic-rendering/minimal-ray-tracer-rendering-simple-shapes/ray-sphere-intersection
  // vec3  O = pos;
  // vec3  D = ray;
  // float R = radius;

  // vec3 A = D*D;
  // vec3 B = 2*O*D;
  // vec3 C = O*O - R*R;

  // QuadraticSolution qs = quadraticSolve(A, B, C);

  // for (float i = 0.; i < steps; i += 1.){
  //   vec3 p = pos + ray*(i*stepsize);
  //   if (length(p) < radius){
  //     float hue = (p.y/radius + 1.)/2.;
  //     float bal = max(dot(normalize(p), light), 0.)*.8 + .2;
  //     col = hsv(hue, 1., bal);
  //     break;
  //   }
  // }

  outColor = vec4(col, 1.);
}