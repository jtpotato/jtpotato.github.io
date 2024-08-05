---
title: "Lingling Development Log"
date: 2024-08-04
---

This page describes the development of Lingling (零零一, _lit. 001_), an experiment into getting Large Language Models to talk to other things, such as Whisper and TTS models.

---

## July 2024

After too much time on YouTube and stumbling into [Neuro-Sama](https://www.youtube.com/channel/UCLHmLrj4pHHg3-iBJn_CqxA), I decided to pull something together really quickly using OpenAI's Whisper, and Ollama.

I really wanted to use the GPT-4o-mini API, but I was not about to explain to my parents why OpenAI is charging me 10 cents per month.

Thankfully, I have a M1 Pro MacBook Pro (early adopter :sparkles:), which means I have just enough VRAM to be able to run these large AI models on-device.

It was only after I ran both ollama and whisper at the same time that I realised 16GB of RAM was not going to cut it.[^1]

---

## August 2024

After several weeks away to focus on other events in my life, I came back to the project with the current nickname, and an itch to rewrite everything I had done.

### 3rd August

Latency is extremely important for any sort of home assistant/voice response agent. Some sources state that latency in conversations becomes unbearable at 400ms, but I don't have a citation so we're just going to move on.

After getting tired of trying various implementations of Whisper, I realised that the problem was using pre-built binaries for Python. Compiling `whisper.cpp` which is about as close to State of The Art as I am comfortable with, I was able reduce transcription time to a solid ~1 seconds. `whisper.cpp` also allows me to use some fancy SIMD tricks that I don't understand, as well as quantized models and CoreML. According to [this](https://github.com/ggerganov/whisper.cpp/discussions/1829) discussion, a CoreML encoder and quantized decoder might be the least memory-intensive way to run Whisper.

Since there doesn't seem to be any good guide for it, the basic steps are:

```sh
# Generate CoreML model
./models/generate-coreml-model.sh medium

# Rebuild whisper.cpp with CoreML support
make clean
WHISPER_COREML=1 make -j

# Quantize model
./quantize models/ggml-medium.bin models/ggml-medium-q5_0.bin q5_0
```

And for some reason, it works.

I also compiled `llama.cpp` from source and downloaded a heavily quantized version of Llama 3.1, to reduce memory footprint and latency.

Both of these models also have their own server, with an OpenAI compatible API - meaning I can use any OpenAI library to interact with these models. (I did not feel like learning FFI, thank goodness)

### 4th August

Rewrote the thing 7 times, flipping between Python, Go and Rust. Gosh I love Rust :crab:. My Python rewrites failed because mutability/memory was hidden entirely, and I was kinda guessing what state was being cloned and what was actually being mutated.

State will forever be my enemy in any of my projects.

Golang was infinitely better, but I was so sick of the `:=` walrus operator every time the codebase got longer than 20 lines. I appreciate this paradigm of managing errors as they arise rather than escalating with `?` or `try/except`, and it's something that I will carry over to other languages that don't explicitly force you to do that. Multiple returns from functions was just gross though. It doesn't sit right.

I was also stuck between conflicting sources about whether or not referring to pointers instead of the actual objects when passing them to functions was "premature optimisation".

idk man, i barely know what C is, i'm not getting this anytime soon

Rust kind of had all of these issues. Which can be solved by letting the compiler beat the daylights out of your code. And I love it. The responsibility now falls onto the Rust Compiler to make sure that I'm not doing anything stupid.

An AI Vtuber is such an overkill application for Rust - you could easily pull this off with Python. But I can't think of a language that better forces you to write code that's so... maintainable and follows all the correct patterns. I believe Rust will force me to write good code that stands up even months later, when I next take a look at this project.

### 5th August

Slightly rewrote error handling. I'm still trying to work out how to best structure it.

[^1]: _Aside:_ I think that not having enough money or hardware resources really forces you to be creative and focus on optimisation. It would have been really easy to just throw more VRAM at the problem and have a working solution, but I really like what taking the time to optimise has done for me.
