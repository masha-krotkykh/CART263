DaDa toolkit project.

Originally, the main focus of this project was exploration of Markov chains and generative texts after my brief encounter with RiTa. Resulting texts reminded of Dada poetry and I decided to further develop this aesthetics. Using Markov strings based on n-grams consisting of individual symbols and those, consisting of the whole words produced very different results. Former vaguely reminds Hugo Ball’s sound poetry, wheres latter is very similar to Tristan Tzara’s cut up method of poetry generation. It was decided to keep both options and sometimes mixing and matching the two results in unexpected and interesting outcome. 

At the beginning the visual part consisting of collage elements was supposed to be purely decorative. However, soon it transformed into interactive experience of its own. User can now add and remove images, scale, and rotate them as well as resize the canvas to frame their collage in the most flattering way. 

As the source text I chose The Communist Manifesto… This piece of writing is responsible for astonishing amount of devastation, misery, and death yet is still romanticized by some and regarded in some parts of the world as a valid ideology. Although quite a few dadaists had marxist and communist sympathies, their overall ideology was about embracing the absurd as a response to the failure of reason. It feels nice simply to deconstruct this text into small meaningless fragments. These fragments still mirror the original phonetically but become completely disjointed and risible. 

Mechanics:
1. Collage
- On load ten random images from the image bank appear on the screen. They are randomly scaled and randomly positioned
- To discard unwanted images, user can drag and drop them into a trash bin
- To add new images, user can press «i» key
- To transform an image, mouse should be over it and
  - «q» and «w» to scale 
  - «a» and «s» to rotate
  - space to flip horizontally
- drag to change position and bring the image to the front of the stack

2. Poetry
- «Do DaDa» button generates a line composed of n-grams based on frequency of their sequential appearance in the source text (order of 2) that rarely results in any existing words (Markov)
- «Do Da» button generates several lines composed of words based on frequency of their sequential appearance in the source text (Markov + RiTa)
- «UnDa the Do» button deletes the last entry whereas
- «UnDo all Das» button clears all entries
