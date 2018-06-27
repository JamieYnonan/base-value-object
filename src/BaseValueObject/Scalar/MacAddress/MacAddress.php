<?php

namespace BaseValueObject\Scalar\MacAddress;

use BaseValueObject\Scalar\BaseString;

/**
 * Class MacAddress
 * @package BaseValueObject\Scalar\MacAddress
 */
class MacAddress extends BaseString
{
    /**
     * @inheritdoc
     */
    protected function setValue(string $value): void
    {
        if (!filter_var($value, FILTER_VALIDATE_MAC)) {
            throw new \InvalidArgumentException(
                sprintf('The MAC Address %s is invalid.', $value)
            );
        }

        $this->value = $value;
    }
}
