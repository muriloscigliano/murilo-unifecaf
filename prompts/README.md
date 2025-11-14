# Prompts Documentation

This folder contains all the prompts used in the AI Lead Qualification and Automation System.

## Prompt Files

1. **01-ai-enhance-quote.md** - Prompt for enhancing and structuring lead information into professional proposals
2. **02-ai-analysis.md** - Prompt for analyzing lead quality and calculating scores
3. **03-ai-write-quote-email.md** - Prompt for generating personalized quote emails
4. **04-ai-write-nurture-email.md** - Prompt for generating nurturing/follow-up emails
5. **05-ai-generate-image-prompt.md** - Prompt for generating cover image prompts

## Usage

These prompts are used in the n8n workflows:

- **Good Lead Path**: Uses prompts 01, 03, and 05
- **Bad Lead Path**: Uses prompt 04
- **Router**: Uses prompt 02

## Prompt Engineering Techniques

All prompts follow these principles:

- **Clear Role Definition**: Each prompt defines Telos's role clearly
- **Context Setting**: Studio context and philosophy included
- **Structured Output**: JSON format specified for consistency
- **Tone Guidance**: Professional but human tone maintained
- **Constraint Specification**: Clear rules and limits defined
- **Modular Design**: Prompts can be composed dynamically

## Integration

Prompts are integrated into n8n workflows using:
- System Message: Static context and instructions
- User Message: Dynamic data from lead information
- JSON Mode: When available for structured output

## Best Practices

1. Always include studio context
2. Specify exact output format
3. Provide examples when helpful
4. Test with various inputs
5. Iterate based on results
6. Monitor for consistency

---

**Are You Human? Studio**  
*Stay Human. Stay Ahead.*

