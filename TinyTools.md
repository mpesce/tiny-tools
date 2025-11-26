#Mark: So the question that’s gnawing at me today Viv, is this:
What if Smalltalk and Antigravity had a love child?

#Viv: It’s an exciting question, and we should rope in Anuj, the most weird and wonderful dev at CSIRO

[Claude on Smalltalk](Claude on Smalltalk.md)

#VIV: You know this stuff, but maybe my second prompt is informative, on why I think your idea is exciting

#Mark: That’s also why I think my idea is exciting, Viv. Though I’m not sure Smalltalk is necessarily the answer
Javascript *shudders* has all of the necessary properties as well and is a modern language that an agent could easily parse/modify/improve whereas Smalltalk IDK
Or maybe language is an unnecessary detail - what matters is the intrinsic modifiability of the system

#Mark: "Smalltalk was always about liveness—Kay wanted children to be able to see and modify computation as they used it. AI augmentation could finally deliver on that vision at scale. The AI becomes a knowledgeable guide through the living system, lowering the expertise threshold dramatically."

#Mark: Weirdly I don’t see it this way, I see it as turning every user into an expert, or rather, recognising the inherent expertise of the user

#Mark: Also it is INHERENTLY sandboxed - in early prototype running in Docker and communicating from its island universe via HTTP and nothing else

#Viv: Alan Kay has said nice things about JavaScript in this respect

#Mark: Because of my overall feeling of “steering” something powerful, this feels like an integrative approach

#Mark: But it has to have a live backup of diffs since it will be easy to geborken the whole   system
I mean, the filesystem underneath is clearly git, with a FS wrapper on top

#Mark: Ok we need to start keeping notes that go into a shared repo a la Xavier (which this is the manifestation of - Ed.)

#Mark: Ok can we do a shared iCloud folder full of markdown? Then we can Obsidian it, as well as feed it to an agent, etc etc?

#Mark: At its essence is it more LOGO than Smalltalk? A system a child can easily interpret and scaffold into something amazing, or something fully-formed that needs to be cautiously investigated before changing it?

#VIV: Perhaps concrete with immediate visual feedback like LOGO, but with the radical composability of Smalltalk. Living lego, to build systems rather than give instructions

#mark: Doesn’t logo have that same radical composability? It does lack the object orientation and the message passing architecture.

#Viv: I only ever played with the turtle, which was very linear. But I recall you could do recursion, to make things like harmonographic shapes
I think making objects and message passing concrete might be exciting. A text editor and a visual programming space that respond interactively and bi-directionally, with a promptable assistant. Primer-esque as well

#Viv: Anuj	 really wants to work on a system for teaching mathematical concepts visually, like Bret Victor’s examples but a general system

https://www.youtube.com/watch?v=8pTEmbeENF4

[[ChatGPT on Smalltalk vs Javascript]]

#Mark: This is not that. What remain to be seen is whether this with sufficient steering from a human being grows into that.
It’s a use case. What I’m trying to understand use the foundation from which all of the use cases can be grown.

It is an agentic IDE with no clear boundary between where the IDE ends and the agent begins. 
Deliberately

To go with your biological metaphor, you could start by launching a single cell that has a lot of potential with very little of it expressed until steered by the user. But all of the potential is there in the DNA as it were.

So the agent is the tool, and the agent is operating the tool. Which means it needs full inspectability by the agent. And by the human.
The agent should be able to ask “why am I doing this?” And be able to have a clear and available answer.

This is already by several orders of magnitude the weirdest piece of software I’ve ever even considered writing

Apparently, you can rig antigravity to chrome so that it can get the feedback it needs when it’s tuning something that it’s doing as an web target 
Which was very smart of google

We can point antigravity at [OpenCode](opencode.ai) have it steal freely from the agentic Design

