<?php

namespace BaseValueObject\Scalar\Ip;

use BaseValueObject\Scalar\BaseString;

/**
 * Class IpV4
 * @package BaseValueObject\Scalar\Ip
 */
class IpV4 extends BaseString
{
    /**
     * @inheritdoc
     */
    protected function setValue(string $value): void
    {
        if (!filter_var($value, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
            throw new \InvalidArgumentException(
                sprintf('The IPv4 %s is invalid.', $value)
            );
        }

        $this->value = $value;
    }
}
