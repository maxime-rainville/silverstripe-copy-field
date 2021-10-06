<?php

namespace MaximeRainville\CopyField;

use MaximeRainville\SilverstripeReact\ReactFormField;
use SilverStripe\Forms\FormField;

class CopyField extends ReactFormField {

    private $obfuscate = false;

    /**
     * @var bool
     */
    protected $readonly = true;

    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_STRING;

    /**
     * This will be the name of the React component that will be use to
     * render the field.
     */
    public function getComponent(): string
    {
        return 'CopyField';
    }

    /**
     * You can customise the props that will be pass to your React component
     * by overriding the `ReactFormField::getProps` method
     */
    public function getProps(): array
    {
        $props = parent::getProps();
        $props['obfuscate'] = $this->getObfuscate();
        return $props;
    }

    public function getObfuscate(): bool
    {
        return $this->obfuscate;
    }

    public function setObfuscate(bool $value): self
    {
        $this->obfuscate = $value;
        return $this;
    }
}
